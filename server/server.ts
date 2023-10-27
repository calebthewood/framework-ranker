import { app } from ".";
import { PORT } from ".";

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});