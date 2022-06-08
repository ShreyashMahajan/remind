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
import { FilterProvider } from "./context/filterContext/filterContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <NoteProvider>
        <FilterProvider>
        <ArchiveProvider>
          <TrashProvider>
          <App />
          </TrashProvider>
        </ArchiveProvider>
        </FilterProvider>
          </NoteProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
