export const getBanners = async () => {
    try {
      const res = await fetch("/api/banner");
  
      if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
  
      return await res.json();
    } catch (error) {
      console.error("Erro ao buscar os banners:", error);
      return null;
    }
};
  