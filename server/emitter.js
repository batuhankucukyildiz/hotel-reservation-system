import { EventEmitter } from "events";

// Bir Event Emitter örneği oluşturma
const myEmitter = new EventEmitter();

// Özel bir olayı dinleyen olay dinleyicisi ekleme
myEmitter.on("greeting", () => {
  console.log("Merhaba dünya!");
});

// Olayı tetikleme
myEmitter.emit("greeting");
