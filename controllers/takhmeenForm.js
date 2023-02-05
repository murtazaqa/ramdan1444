const TakhmeenForm = require("../models/takhmeenFormModel");

// @desc   Get all from List
// @route  GET /api/v1/takhmeenform
exports.getTakhmeenForm = async (req, res, next) => {
  try {
    const list = await TakhmeenForm.find();
    return res.status(200).json({
      success: true,
      data: list,
    });
  } catch (error) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc   Add to List
// @route  POST /api/v1/takhmeenform
exports.addTakhmeenForm = async (req, res, next) => {
  try {
    const formData = {
      ...req.body,
      formNo: `${req.body.markaz}-${Date.now()}`,
    };
    const list = await TakhmeenForm.create(formData);
    return res.status(201).json({
      success: true,
      data: list,
    });
  } catch (error) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
    return;
  }
};

// @desc   Update List
// @route  PUT /api/v1/takhmeenform
exports.updateTakhmeenForm = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const newList = await TakhmeenForm.findOneAndUpdate(
      { _id },
      req.body,
      { new: true } // Return updated one
    );
    return res.status(200).json(newList);
  } catch (error) {
    res.send(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc   Delete List
// @route  DELETE /api/v1/takhmeenform
exports.deleteTakhmeenForm = async (req, res, next) => {
  try {
    console.log(req.body);
    const { _id } = req.body;
    const list = await TakhmeenForm.findById(_id);
    if (!list) {
      res.status(404).json({
        success: false,
        error: "Not Found",
      });
    }

    await TakhmeenForm.deleteOne();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.log(error);
  }
};
