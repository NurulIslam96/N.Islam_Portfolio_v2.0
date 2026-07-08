const INDEX_KEY = "portfolio_contact_index";
const MSG_PREFIX = "portfolio_contact_msg_";

export function loadInbox() {
  try {
    const ids = JSON.parse(localStorage.getItem(INDEX_KEY) || "[]");
    return ids
      .map((id) => {
        const raw = localStorage.getItem(MSG_PREFIX + id);
        return raw ? JSON.parse(raw) : null;
      })
      .filter(Boolean)
      .reverse();
  } catch (e) {
    return [];
  }
}

export function saveMessage(msg) {
  try {
    const ids = JSON.parse(localStorage.getItem(INDEX_KEY) || "[]");
    ids.push(msg.id);
    localStorage.setItem(INDEX_KEY, JSON.stringify(ids));
    localStorage.setItem(MSG_PREFIX + msg.id, JSON.stringify(msg));
    return true;
  } catch (e) {
    return false;
  }
}

export function clearInbox() {
  try {
    const ids = JSON.parse(localStorage.getItem(INDEX_KEY) || "[]");
    ids.forEach((id) => localStorage.removeItem(MSG_PREFIX + id));
    localStorage.removeItem(INDEX_KEY);
  } catch (e) {
    /* no-op */
  }
}
