# Sample Run:
- cd backend and run node index.js
- In a new terminal, run:
curl -X POST http://localhost:5000/api/recommend \
     -H "Content-Type: application/json" \
     -d '{"goal": "quantum error correction and matrix hardware design"}'