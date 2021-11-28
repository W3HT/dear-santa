const { User } = require("../models");

module.exports = {
  async share(req, res) {
    try {
      const filter = { key: req.body.key };
      const user = await User.findOne(filter);
      const shares = user.shares;
      const i = shares.indexOf(req.body.giver);

      if (i === -1) {
        shares.push(req.body.giver);
        user.update({ shares: shares }).exec();
      }

      res.json({ shares: user.shares });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async readWishes(req, res) {
    // pull from model, get current list of all wishes for logged in user
    try {
      const filter = { key: req.params.key };
      const user = await User.findOne(filter);

      if (!user) {
        return res.status(400).json({ message: "No wishes found" });
      }

      res.json(user.wishes);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async createWish(req, res) {
    // save a wish for current user
    try {
      const filter = { key: req.body.key };
      const user = await User.findOne(filter);
      const wishes = user.wishes;
      const i = wishes.indexOf(req.body.description);

      if (i > -1) {
        return res
          .status(400)
          .json({ message: "Cannot create wish, already exists" });
      } else {
        wishes.push({
          description: req.body.description,
          granted: req.body.granted,
        });
        user.update({ wishes: wishes }).exec();
      }

      res.json({ wishes: user.wishes });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async updateWish(req, res) {
    // replace a wish for current user
    try {
      const filter = { key: req.body.key };
      const user = await User.findOne(filter);
      const wishes = user.wishes;
      const i = wishes.indexOf(req.body.before);

      if (i > -1) {
        wishes[i] = { description: req.body.after, granted: req.body.granted };
        user.update({ wishes: wishes }).exec();
      } else {
        return res.status(400).json({ message: "Did not find wish" });
      }

      res.json({ wishes: user.wishes });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  async deleteWish(req, res) {
    // remove a wish for current user
    try {
      const filter = { key: req.body.key };
      const user = await User.findOne(filter);
      const wishes = user.wishes;
      const i = wishes.indexOf(req.body.description);

      if (i > -1) {
        wishes.splice(i, 1);
        user.update({ wishes: wishes }).exec();
      } else {
        return res
          .status(400)
          .json({ message: "Cannot delete wish, does not exist" });
      }

      res.json({ wishes: user.wishes });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
};
