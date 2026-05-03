import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import { randomUUID } from "node:crypto";

const router: IRouter = Router();

router.post("/contact", (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    const message = firstIssue
      ? `${firstIssue.path.join(".") || "field"}: ${firstIssue.message}`
      : "Invalid input";
    res.status(400).json({ error: message });
    return;
  }

  const id = randomUUID();
  const submission = parsed.data;

  req.log.info(
    {
      contactSubmissionId: id,
      name: submission.name,
      email: submission.email,
      company: submission.company,
      phone: submission.phone,
      messageLength: submission.message.length,
    },
    "Received contact submission",
  );

  res.json({ success: true, id });
});

export default router;
