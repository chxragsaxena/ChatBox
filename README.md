💬 Scalable Real-Time Chat App (TypeScript)
A real-time chat application built with TypeScript and Socket.IO, designed for horizontal scalability using IO Redis. This system supports multiple server instances and ensures reliable event synchronization across all of them.

🚀 Features
Real-time messaging with Socket.IO

Written entirely in TypeScript for better type safety and maintainability

Horizontal scaling using Redis pub/sub mechanism

Integrated IO Redis adapter to sync events (like messages and user presence) across distributed Node.js servers

Designed for high concurrency, low latency, and consistent user experience

🧰 Tech Stack
Node.js, TypeScript, Express

Socket.IO

Redis + socket.io-redis via IO Redis

(Optional) Frontend: React / HTML + JS WebSocket client

