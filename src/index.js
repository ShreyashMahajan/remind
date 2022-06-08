import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext/authContext";
import { NoteProvider } from "./context/notesContext/notesContext";
import { ArchiveProvider } from "./context/archiveContext/archiveContext";
import { TrashProvider } from "./context/trashContext/trashContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <NoteProvider>
        <ArchiveProvider>
          <TrashProvider>
          <App />
          </TrashProvider>
        </ArchiveProvider>
          </NoteProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
