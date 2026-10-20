# HPOSKit Product Build Plan

## Product objective
HPOSKit is becoming a professional HPOS compatibility platform for WooCommerce plugin authors, agencies, and teams. The goal is to provide trusted scan results, safe automation, and a clear remediation workflow before WooCommerce order storage changes break plugin behavior.

## Product promise
- Detect HPOS-breaking patterns in WooCommerce plugins
- Explain the risk and the exact code involved
- Show which issues are safe to auto-fix and which need manual review
- Export patched plugin archives and patch diffs
- Scan GitHub repositories and CI pipelines for compatibility regressions
- Support teams and agencies with a workflow built for trust and traceability

## Non-goals for v1
- Blindly rewriting arbitrary PHP code without human review
- Auto-applying mutations to production sites without backup and approval
- Claiming 100% correctness on every plugin architecture
- Replacing the need for human code review in high-risk or custom logic

## Target customers
- WooCommerce plugin developers
- agencies and dev shops
- plugin maintainers shipping to WordPress / WooCommerce marketplaces
- merchants with custom WooCommerce code
- release and QA teams integrating HPOS compatibility checks in CI

## Core product shape
1. SaaS web app for scanning uploaded plugin ZIPs and connected repos
2. Review-first patch studio with safe patch preview and export
3. GitHub App / CI integration for automated compatibility checks
4. WordPress companion plugin for live store/plugin auditing in later phases

## Architecture principles
- Trust before automation
- Safe patching over broad rewriting
- Code reviews are required for uncertain edits
- Confidence scores and manual review flags are mandatory
- A scan result must explain why something is flagged
- The system must be auditable over time

## Phase roadmap
### Phase 1: Engine hardening and safe automation
- Replace regex-only scanning with AST-aware analysis for key PHP patterns
- Add confidence levels and manual review gates
- Only auto-patch high-confidence matches
- Build a real rule registry with severity and patchability metadata

### Phase 2: SaaS platform foundation
- Auth, teams, projects, saved scans
- Upload plugin ZIP flow
- Saved report history
- Dashboard and issue list
- Payment and plan management

### Phase 3: Repo and CI integration
- GitHub repo connections
- PR and branch scanning
- status checks
- patch suggestions and fix diff previews

### Phase 4: WordPress companion tooling
- scan installed plugins on live WordPress sites
- risk reporting and backup-safe patch package output
- first-pass audit for store owners and agencies

### Phase 5: Enterprise and governance
- SSO, API, enterprise rules, audit logs, compliance exports

## Quality bar for release
- Real PHP fixtures for known bug patterns
- False-positive controls for strings/comments and nested expressions
- High-confidence patching only
- Clear separation between safe patch and manual fix
- Background job processing and queue reliability
- Monitoring and audit logs for scan events

## Immediate next priorities
1. Improve the issue model with confidence and manual review metadata
2. Hard-code safe-patch gating at the patch engine boundary
3. Add scanner test coverage for safety and confidence classification
4. Define project vs workspace data model for SaaS onboarding
5. Build repository scan orchestration foundation

## Definition of done for this sprint
- issue model supports confidence and manual review
- patch engine refuses low-confidence auto-patches
- tests validate the safety model
- documentation is stored in the repo so the plan is versioned and reviewable
