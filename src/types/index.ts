export interface WeatherProps {
  place_id: string;
  licence: string;
  osm_type: string;
  osm_id: string;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon: string;
}

export interface countryListProps {
  country_name: string;
  country_short_name: string;
  country_phone_code: number;
}
