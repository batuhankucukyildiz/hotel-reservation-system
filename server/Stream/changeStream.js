import users from "../src/models/userSchema.js";

const startChangeStream = () => {
  const changeStream = users.watch();

  changeStream.on("change", (change) => {
    console.log("Değişiklik:", change);
    // Değişiklikleri işle
  });

  changeStream.on("error", (err) => {
    console.error("Change Stream hatası:", err);
  });
};

export default startChangeStream;
