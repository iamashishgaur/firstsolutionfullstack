import { useSession } from "next-auth/react";
import { connect } from "@/dbConfig/dbConfig";
import Job from "@/models/jobs/jobModel";
import { NextRequest, NextResponse } from "next/server";

import User from "@/models/user/userModel";

export default async function handler(req, res) {
  const session = await useSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  await connect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const jobs = await Job.find({}).populate("postedBy");
        res.status(200).json({ success: true, data: jobs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.findOne({ email: session.user.email });
        const job = await Job.create({ ...req.body, postedBy: user._id });
        res.status(201).json({ success: true, data: job });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
