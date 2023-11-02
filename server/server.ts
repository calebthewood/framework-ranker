import { app } from "./index";
import { PORT } from "./config";

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});