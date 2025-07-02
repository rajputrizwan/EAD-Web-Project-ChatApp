// frontend/src/store/useChatStore.js
import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUserLoading: false,
  isMessageLoading: false,
  unreadCounts: {}, // 🔔 <-- NEW

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const response = await axiosInstance.get("/messages/users");
      set({ users: response.data, isUserLoading: false });
    } catch {
      set({ isUserLoading: false });
      toast.error("Failed to load users");
    }
  },

  getMessages: async (userId) => {
    set({ isMessageLoading: true });
    try {
      const response = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: response.data.messages, isMessageLoading: false });
      // Reset unread count when opening this chat
      set((state) => ({
        unreadCounts: { ...state.unreadCounts, [userId]: 0 },
      }));
    } catch {
      set({ isMessageLoading: false });
      toast.error("Failed to load messages");
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();

    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data.newMessage] });
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to send message");
    }
  },

  subscribeToMessages: () => {
    const socket = useAuthStore.getState().socket;

    socket.on("newMessage", (newMessage) => {
      const { selectedUser, messages, unreadCounts } = get();

      if (selectedUser && selectedUser._id === newMessage.senderId) {
        // User is on this chat – add message
        set({ messages: [...messages, newMessage] });
      } else {
        // User is NOT on this chat – increment unread count
        const currentCount = unreadCounts[newMessage.senderId] || 0;
        set({
          unreadCounts: {
            ...unreadCounts,
            [newMessage.senderId]: currentCount + 1,
          },
        });
      }
    });
  },

  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (user) => set({ selectedUser: user }),

  resetChatStore: () =>
    set({
      messages: [],
      users: [],
      selectedUser: null,
      isUserLoading: false,
      isMessageLoading: false,
      unreadCounts: {},
    }),
}));
