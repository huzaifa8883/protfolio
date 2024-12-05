// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['react-router-dom'],  // Add this line to tell Vite to treat react-router-dom as an external dependency
    },
  },
};
