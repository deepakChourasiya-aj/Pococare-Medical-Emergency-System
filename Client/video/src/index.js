// const socket = io('http://localhost:9000/');

const roomID = document.getElementById("roomID");
const joinRoom = document.getElementById("joinRoom");
joinRoom.onclick = (e) => {
  e.preventDefault();

  const RoomID = roomID.value;

  localStorage.setItem("RoomID", RoomID);

  window.location.href = "./chat.html";
};
