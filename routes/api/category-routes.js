const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const allCategories = await Category.findAll({
      // include its associated Products
      include: { model: Product },
    });

    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const selectedId = await Category.findByPk(req.params.id, {
      // include its associated Products
      include: { model: Product },
    });

    if (!selectedId) {
      res
        .status(404)
        .json({ message: "Category ID not Found, please enter a valid ID." });
    }

    res.status(200).json(selectedId);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);

    res.status(200).json(newCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    // update category
    const selectedId = req.params.id;
    const categoryUpdate = await Category.update(req.body, {
      where: {
        id: selectedId,
      },
    });

    if (!selectedId) {
      res.status(404).json({
        message: "Category ID not Found, cannot update without a valid ID.",
      });
      return;
    }

    res.status(200).json(categoryUpdate);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const selectedId = req.params.id;
    const categoryDelete = await Category.destroy({
      where: {
        id: selectedId,
      },
    });
    if (!selectedId) {
      res.status(404).json({
        message: "Category ID not Found, cannot update without a valid ID.",
      });
      return;
    }

    res.status(200).json(categoryDelete);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
