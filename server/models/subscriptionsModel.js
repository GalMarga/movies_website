//subscriptionsModel.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionsShema = new Schema(
  {

    movieid: { type: String, required: true },
    memberid: { type: Schema.Types.ObjectId, ref: "Members" },
    date: { type: Date, required: true },

  },

  { versionKey: false }
);

const Subscriptions = mongoose.model( "Subscription", subscriptionsShema , "subscriptions");

module.exports = Subscriptions;
