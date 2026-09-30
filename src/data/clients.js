const modules = import.meta.glob("../assets/collaboration/*.png", { eager: true, import: "default" });

export const clientLogos = Object.entries(modules).map(([path, src]) => {
  const slug = path.split("/").pop().replace(".png", "");
  return { src, name: slug.replace(/-/g, " ") };
});
