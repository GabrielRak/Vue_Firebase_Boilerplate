<template>
  <div class="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    <form @submit.prevent="sendEmail" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          v-model="name"
          type="text"
          placeholder="Your Name"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Your Email</label
        >
        <input
          v-model="email"
          type="email"
          placeholder="Your Email"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700"
          >Your Message</label
        >
        <textarea
          v-model="message"
          placeholder="Your Message"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { useDashboardStore } from "../store/dashboardStore";
export default {
  name: "Newsletter_form",
  data() {
    const dashboardStore = useDashboardStore();

    const sendEmail = () => {
      dashboardStore.send_NewsletterMail({
        name: this.name,
        email: this.email,
        message: this.message,
      });
    };

    return {
      sendEmail,
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>
