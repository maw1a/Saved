const router = require("express").Router();
const vaultController = require("../controllers/vaultController");
const auth = require("../middlewares/auth");

router.post("/password", auth, vaultController.addPassword);
router.get("/password/:id", auth, vaultController.fetchPassword);
router.put("/password", auth, vaultController.updatePassword);
router.delete("/password/:id", auth, vaultController.removePassword);
router.get("/all/password", auth, vaultController.fetchallPassword);

module.exports = router;
