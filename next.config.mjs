export default {
  redirects: async () => [
    {
      source: "/",
      destination: "/documents/new",
      permanent: true, // Use true for permanent redirect (optional)
    },
  ],
};
