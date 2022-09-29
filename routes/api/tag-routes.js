const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product, through: ProductTag, as: 'taggedProducts'}]
    });

    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const findTag = await Tag.findByPk(req.params.id, {
      // include its associated Product data
      include: [{ model: Product, through: ProductTag, as: 'taggedProducts'}]
    });

    res.status(200).json(findTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  //  create a new tag
  try {
    const newTag = await Tag.create(req.body);
    /* rec.body should look like...
    {
      "tag_name:": "Orange"
    }
    */
   
    res.status(200).json(newTag);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // update tag name
    const selectedId = req.params.id;
    const tagUpdate = await Tag.update(req.body, {
      where: {
        id: selectedId,
      },
    });

    res.status(200).json(tagUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const selectedId = req.params.id;
    const tagDelete = await Tag.destroy({
      where: {
        id: selectedId,
      },
    });

    res.status(200).json(tagDelete);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
