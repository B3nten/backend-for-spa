import {createRoot} from 'react-dom/client';
import React from "react"
import {default as Entry} from "./entry.tsx"

createRoot(document.getElementById('app')).render(<Entry />)