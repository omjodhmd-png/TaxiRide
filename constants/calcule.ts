import { LatLng } from "react-native-maps";





export const calculateDistance = (coord1:LatLng, coord2:LatLng) => {
    const R = 6371; // Rayon de la Terre en km
    const dLat = toRad(coord2.latitude - coord1.latitude);
    const dLon = toRad(coord2.longitude - coord1.longitude);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coord1.latitude)) * 
      Math.cos(toRad(coord2.latitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance; // en km
  };
  
  export const toRad = (value:number) => (value * Math.PI) / 180;


  export const calculatePrice = (distanceKm:number) => {
    const PRISE_EN_CHARGE = 7; // DH
    const PRIX_PAR_KM = 3; // DH
    
    const total = PRISE_EN_CHARGE + (distanceKm * PRIX_PAR_KM);
    return Math.round(total * 100) / 100; // Arrondir à 2 décimales
  };

  export function calculateTime(distanceKm:Number) {
    const VITESSE_MOYENNE_KMH =40;
    const tempsHeures = distanceKm / VITESSE_MOYENNE_KMH;
    const tempsMinutes = tempsHeures * 60;
  
    // Retourner un nombre entier
    return Math.round(tempsMinutes);
  }