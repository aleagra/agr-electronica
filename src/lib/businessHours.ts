export interface BusinessStatus {
  isOpen: boolean;
  label: string;
  badgeText: string;
}

export function getBusinessStatus(): BusinessStatus {
  const now = new Date();
  const argOffset = -3 * 60; // UTC-3
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const argTime = new Date(utc + argOffset * 60000);

  const day = argTime.getDay(); // 0=Domingo, 6=Sábado
  const hours = argTime.getHours();
  const minutes = argTime.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  const openMin = 9 * 60 + 30; // 9:30
  const closeMin = 16 * 60; // 16:00

  const isOpen =
    day >= 1 && day <= 5 && totalMinutes >= openMin && totalMinutes < closeMin;

  let badgeText = "";
  if (isOpen) {
    badgeText = "ABIERTO — Lunes a Viernes de 9:30 a 16:00 hs";
  } else {
    if (day >= 1 && day <= 5 && totalMinutes < openMin) {
      badgeText = "CERRADO — Abre hoy 9:30 hs";
    } else if (day >= 1 && day <= 4 && totalMinutes >= closeMin) {
      badgeText = "CERRADO — Abre mañana 9:30 hs";
    } else {
      badgeText = "CERRADO — Abre Lunes 9:30 hs";
    }
  }

  return {
    isOpen,
    label: isOpen ? "Abierto" : "Cerrado",
    badgeText,
  };
}