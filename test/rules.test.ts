import { describe, it, expect } from "vitest";
import { getIssueRule, getPatchableRules, getManualReviewRules } from "../src/lib/rules";

describe("issue rules registry", () => {
  it("returns the expected metadata for a high-confidence auto-patchable rule", () => {
    const rule = getIssueRule("get_post");
    expect(rule.patchable).toBe(true);
    expect(rule.safeAutoPatch).toBe(true);
    expect(rule.defaultConfidence).toBe("high");
    expect(rule.category).toBe("order_access");
  });

  it("marks SQL and hook-based findings as manual review only", () => {
    const sqlRule = getIssueRule("wpdb_get_results");
    const hookRule = getIssueRule("deprecated_hook");

    expect(sqlRule.manualReview).toBe(true);
    expect(sqlRule.safeAutoPatch).toBe(false);
    expect(hookRule.manualReview).toBe(true);
    expect(hookRule.safeAutoPatch).toBe(false);
  });

  it("groups patchable rules correctly", () => {
    const patchable = getPatchableRules();
    const manual = getManualReviewRules();

    expect(patchable.some((rule) => rule.type === "get_post")).toBe(true);
    expect(patchable.some((rule) => rule.type === "missing_wc_header")).toBe(true);
    expect(manual.some((rule) => rule.type === "wpdb_get_results")).toBe(true);
    expect(manual.some((rule) => rule.type === "deprecated_hook")).toBe(true);
  });
});
