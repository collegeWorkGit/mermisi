import { initializeTable } from "./tableConfig.js";
import { initializeExams } from "./examConfig.js";

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", () => {
  console.log("Dashboard initializing...");
  
  // Initialize Schedule Table
  initializeTable();
  
  // Initialize Exam Modules
  initializeExams("#exam-modules-container");
  
  console.log("Dashboard initialized successfully.");
});
