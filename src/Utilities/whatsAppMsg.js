const createWhatsAppLink = (username, roomId) => {
  console.log(username, roomId);

  const SharingLink = `https://wa.me/?text=Hi! _${username}_ has invited you to a *Code Collab*,
    %0a%0aEnter the room this Room ID- *${roomId}*,
    %0a%0aOr click on the link- https://offdutyninjas.site/editor/${roomId}/false`;

  window.open(SharingLink, "_blank");
};

export default createWhatsAppLink;
