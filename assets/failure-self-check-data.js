// Generated from the failure map on build/when-jev-fails (n 80, map recomputed 19 Oct 2026). Every count equals the page's data-n values.
window.FSC_DATA = {
 "n": 80,
 "map_date": "19 Oct 2026",
 "conditions": [
  {
   "id": "err",
   "question": "Jev error or timeout",
   "checklist": {
    "number": 1,
    "text": "When Jev errors or times out, does the action still happen?"
   },
   "choices": [
    {
     "key": "fc",
     "label": "stop or hold the action",
     "term": "fail-closed",
     "cls": "fc",
     "count": 40,
     "examples": [
      "WordPress Jev Comment Triage (Content moderation, pinned d848a5b): fail-closed; comment held, retried, then left for a person",
      "delt96/claude-jev-advisor 0.5.0, rm hook (PreToolUse, Windows only) (Claude Code / MCP guards, pinned f2c1791): fail-closed; held: the guard's own ask stands; 8,000 ms within a 12,000 ms budget …",
      "browser-use/jev-ultrafast (Browser and computer use, pinned 1231850): fail-closed; 25 s; \"no action executed\""
     ],
     "fallback": false
    },
    {
     "key": "fb",
     "label": "fall back",
     "term": "fallback",
     "cls": "fb",
     "count": 22,
     "examples": [
      "mikespins/doom-jev (Real-time control, pinned bd4e98f): fallback-last action; the game keeps applying the last action every tick; 2.0 s timeout, no retries · action goes ahead",
      "CyrilBaah/jev-triage-desk (Ticket triage, pinned 63913177): fallback-archive lane",
      "LiteLLM complexity router (Model routing, pinned 8d28e8d): fallback-configured tier or local scorer; 3 s"
     ],
     "fallback": true
    },
    {
     "key": "fo",
     "label": "let it through",
     "term": "fail-open",
     "cls": "fo",
     "count": 10,
     "examples": [
      "DoGMaTiiC/hermes-jev jev-judge (enforce mode; default shadow) (Coding agents, pinned 5dddbea): fail-open; 3 s · action goes ahead",
      "danna-zhou/jev-mcp PreToolUse hook (Claude Code / MCP guards, pinned 436469a): fail-open; 8,000 ms; the command runs · action goes ahead",
      "Novacon/ohmyjev, Claude Code module (Bash, Write/Edit and exfiltration gates; enforcing deny) (Claude Code / MCP guards, pinned 78bb82c): fail-open; 1,500 ms (policy.ts L63; race at ohmyjev.ts L80–89) …"
     ],
     "fallback": false
    },
    {
     "key": "nd",
     "label": "return no decision",
     "term": "no-decision",
     "cls": "nd",
     "count": 5,
     "examples": [
      "BillionsBobby/JevRouter (Model routing, pinned e11084c): no-decision; 15 s / 20 s",
      "Zafer-Liu/jev-demo-moderator (Content moderation, pinned cc47b25): no-decision; error field; batch 502",
      "Jevmail (Email and lead, pinned f6f20af): no-decision; email stays unclassified"
     ],
     "fallback": false
    },
    {
     "key": "adv",
     "label": "advisory: a person or heuristic decides",
     "term": "advisory",
     "cls": "adv",
     "count": 3,
     "examples": [
      "jev-claude 0.1.0, shadow mode as installed (Claude Code / MCP guards, pinned 7d7e876): advisory",
      "jkudish/jev-mcp (Claude Code / MCP guards, pinned 53fe575): advisory; error to the agent; 60 s",
      "oh-my-claudecode (v5.5.0; checked v5.6.2) (Claude Code / MCP guards, pinned 9fd35ec): advisory; shadow by default; the heuristic decides; 2,000 ms"
     ],
     "fallback": false
    }
   ],
   "unsure_label": "not sure / not checked",
   "unsure_text": "Not sure? Question 1 in the checklist below shows what to look for."
  },
  {
   "id": "mal",
   "question": "Malformed answer",
   "checklist": {
    "number": 3,
    "text": "If Jev answers in the wrong shape, do you treat it as \"no\" or as \"yes\"?"
   },
   "choices": [
    {
     "key": "fc",
     "label": "stop or hold the action",
     "term": "fail-closed",
     "cls": "fc",
     "count": 36,
     "examples": [
      "gbesse/zammad-jev-triage (Ticket triage, pinned 5d2a0a78): fail-closed; validated → 503",
      "nidhi-singh02/agent-router (Model routing, pinned fb24d06): fail-closed; exit code 2; nothing launched",
      "LangChain AutoModeMiddleware (Python) 0.0.1a3 (Claude Code / MCP guards, pinned 4af7ab8): fail-closed"
     ],
     "fallback": false
    },
    {
     "key": "fb",
     "label": "fall back",
     "term": "fallback",
     "cls": "fb",
     "count": 24,
     "examples": [
      "CyrilBaah/jev-triage-desk (Ticket triage, pinned 63913177): fallback-archive lane",
      "LiteLLM complexity router (Model routing, pinned 8d28e8d): fallback-configured tier or local scorer; same path as an error",
      "madisonrickert/jev-permission-gate (Claude Code / MCP guards, pinned 7349bc9): fallback-built-in classifier"
     ],
     "fallback": true
    },
    {
     "key": "fo",
     "label": "let it through",
     "term": "fail-open",
     "cls": "fo",
     "count": 13,
     "examples": [
      "fraud-jev (Trading and fraud, pinned aa33b97): fail-open; non-numeric → allow; conditional",
      "jev-trader (Trading and fraud, pinned b587759): fail-open; any other answer → buy; conditional",
      "WordPress Jev Comment Triage (Content moderation, pinned d848a5b): fail-open; read as 0.0; WordPress approval can stand"
     ],
     "fallback": false
    },
    {
     "key": "nd",
     "label": "return no decision",
     "term": "no-decision",
     "cls": "nd",
     "count": 4,
     "examples": [
      "BillionsBobby/JevRouter (Model routing, pinned e11084c): no-decision",
      "Zafer-Liu/jev-demo-moderator (Content moderation, pinned cc47b25): no-decision",
      "ilyamk Gmail labeler (Email and lead, pinned ade42bf): no-decision; skipped"
     ],
     "fallback": false
    },
    {
     "key": "adv",
     "label": "advisory: a person or heuristic decides",
     "term": "advisory",
     "cls": "adv",
     "count": 3,
     "examples": [
      "jev-claude 0.1.0, shadow mode as installed (Claude Code / MCP guards, pinned 7d7e876): advisory",
      "jkudish/jev-mcp (Claude Code / MCP guards, pinned 53fe575): advisory; \"review\"",
      "oh-my-claudecode (v5.5.0; checked v5.6.2) (Claude Code / MCP guards, pinned 9fd35ec): advisory"
     ],
     "fallback": false
    }
   ],
   "unsure_label": "not sure / not checked",
   "unsure_text": "Not sure? Question 3 in the checklist below shows what to look for."
  },
  {
   "id": "bel",
   "question": "Below threshold",
   "checklist": {
    "number": 4,
    "text": "What happens when Jev is unsure?"
   },
   "choices": [
    {
     "key": "held",
     "label": "held",
     "term": "held",
     "cls": "fc",
     "count": 17,
     "examples": [
      "vynnlee/jev-mail (Email and lead, pinned 61e346f): held; Review label, kept in the inbox",
      "gbesse/zammad-jev-triage (Ticket triage, pinned 5d2a0a78): held; < 0.9 → review group",
      "nidhi-singh02/agent-router (Model routing, pinned fb24d06): held; < 0.75 and consequential → you pick"
     ],
     "fallback": false
    },
    {
     "key": "aa",
     "label": "acts anyway",
     "term": "acts-anyway",
     "cls": "fo",
     "count": 16,
     "examples": [
      "backmeupplz/jev_antispam_bot (Content moderation, pinned 0b07e88): acts-anyway; < 0.81 kept",
      "LangChain AutoModeMiddleware (Python) 0.0.1a3 (Claude Code / MCP guards, pinned 4af7ab8): acts-anyway; is_risky < 0.5 → tool runs; fixed cut",
      "Jevmail (Email and lead, pinned f6f20af): acts-anyway; flagged; lane still assigned"
     ],
     "fallback": false
    },
    {
     "key": "fb",
     "label": "falls back",
     "term": "fallback",
     "cls": "fb",
     "count": 12,
     "examples": [
      "gargpratyush/jev-router (Model routing, pinned 38da6b8): fallback-current model; < 0.3, or an upgrade capped at sonnet",
      "madisonrickert/jev-permission-gate (Claude Code / MCP guards, pinned 7349bc9): fallback-built-in classifier; defers",
      "ilyamk Gmail labeler (Email and lead, pinned ade42bf): fallback-full-body call; then its label is applied unchecked"
     ],
     "fallback": true
    },
    {
     "key": "nd",
     "label": "no decision",
     "term": "no-decision",
     "cls": "nd",
     "count": 5,
     "examples": [
      "BillionsBobby/JevRouter (Model routing, pinned e11084c): no-decision; < 0.55",
      "parth-kp IMAP classifier (Email and lead, pinned db96194): no-decision; marked processed",
      "dougsong/jev-android (Browser and computer use, pinned be8364a): no-decision; < 0.65 → replan ×2 → BLOCKED"
     ],
     "fallback": false
    },
    {
     "key": "adv",
     "label": "advisory",
     "term": "advisory",
     "cls": "adv",
     "count": 5,
     "examples": [
      "frolleks/soter (Content moderation, pinned 756579a): advisory; 0.5–0.8 → mod-log review, no action",
      "jev-claude 0.1.0, shadow mode as installed (Claude Code / MCP guards, pinned 7d7e876): advisory",
      "jkudish/jev-mcp (Claude Code / MCP guards, pinned 53fe575): advisory"
     ],
     "fallback": false
    },
    {
     "key": "nt",
     "label": "no threshold",
     "term": "no-threshold",
     "cls": "none",
     "count": 25,
     "examples": [
      "CyrilBaah/jev-triage-desk (Ticket triage, pinned 63913177): no-threshold; no confidence gate",
      "LiteLLM complexity router (Model routing, pinned 8d28e8d): no-threshold; confidence logged only",
      "Zafer-Liu/jev-demo-moderator (Content moderation, pinned cc47b25): no-threshold; Jev's Choice decides; code only tightens"
     ],
     "fallback": false
    }
   ],
   "unsure_label": "not sure / not checked",
   "unsure_text": "Not sure? Question 4 in the checklist below shows what to look for."
  },
  {
   "id": "key",
   "question": "No API key configured",
   "checklist": {
    "number": 5,
    "text": "What happens with no API key?"
   },
   "choices": [
    {
     "key": "fc",
     "label": "refuse, error or hold",
     "term": "fail-closed",
     "cls": "fc",
     "count": 51,
     "examples": [
      "Official node 0.9.0 (n8n nodes, pinned c12537b): fail-closed; n8n's \"Node does not have any credentials set\" error with Continue On Fail off …",
      "spam-leadgen-pipeline (Email and lead, pinned 78a7592): fail-closed; the SDK client is built at load; @typesafe-ai/sdk 0.6.0 throws in its constructor …",
      "CyrilBaah/jev-triage-desk (Ticket triage, pinned 63913177): fail-closed; HTTP 500"
     ],
     "fallback": false
    },
    {
     "key": "fb",
     "label": "fall back",
     "term": "fallback",
     "cls": "fb",
     "count": 17,
     "examples": [
      "jev-fraud-shield (Trading and fraud, pinned eeb4fc6): fallback-mock",
      "gargpratyush/jev-router (Model routing, pinned 38da6b8): fallback-unrouted CLI model; starts without Jev; the CLI keeps its own model",
      "madisonrickert/jev-permission-gate (Claude Code / MCP guards, pinned 7349bc9): fallback-built-in classifier"
     ],
     "fallback": true
    },
    {
     "key": "fo",
     "label": "proceed as if allowed",
     "term": "fail-open",
     "cls": "fo",
     "count": 9,
     "examples": [
      "WordPress Jev Comment Triage (Content moderation, pinned d848a5b): fail-open; no provider → WordPress decides",
      "danna-zhou/jev-mcp PreToolUse hook (Claude Code / MCP guards, pinned 436469a): fail-open; the hook proceeds",
      "ironbee-ai/ironbee-express (Browser and computer use, pinned 05079b4): fail-open; conditional: a cached recording replays unjudged; fail-closed without one"
     ],
     "fallback": false
    },
    {
     "key": "nd",
     "label": "return no decision",
     "term": "no-decision",
     "cls": "nd",
     "count": 0,
     "examples": [],
     "fallback": false
    },
    {
     "key": "adv",
     "label": "advisory",
     "term": "advisory",
     "cls": "adv",
     "count": 3,
     "examples": [
      "jev-claude 0.1.0, shadow mode as installed (Claude Code / MCP guards, pinned 7d7e876): advisory; flags only",
      "jkudish/jev-mcp (Claude Code / MCP guards, pinned 53fe575): advisory; error to the agent",
      "oh-my-claudecode (v5.5.0; checked v5.6.2) (Claude Code / MCP guards, pinned 9fd35ec): advisory; point off; heuristic"
     ],
     "fallback": false
    }
   ],
   "unsure_label": "not sure / not checked",
   "unsure_text": "Not sure? Question 5 in the checklist below shows what to look for."
  },
  {
   "id": "byp",
   "question": "Bypass",
   "checklist": {
    "number": 6,
    "text": "Which code paths never ask Jev?"
   },
   "choices": [
    {
     "key": "none-found",
     "label": "every entry point checked; none skips Jev",
     "term": "recorded: none found",
     "cls": "rec",
     "count": 13,
     "examples": [
      "CyrilBaah/jev-triage-desk (Ticket triage, pinned 63913177): none found (only an empty-ticket 400 and the no-key 500, which route nothing)",
      "Zafer-Liu/jev-demo-moderator (Content moderation, pinned cc47b25): none found in the entry points server.py, moderator.py, web/index.html",
      "parth-kp IMAP classifier (Email and lead, pinned db96194): none found (a per-run cap defers mail)"
     ],
     "fallback": false
    },
    {
     "key": "skip-paths-listed",
     "label": "some code paths skip Jev (listed)",
     "term": "recorded: skip paths listed",
     "cls": "rec",
     "count": 67,
     "examples": [
      "jev-trader (Trading and fraud, pinned b587759): mock model trades without Jev",
      "backmeupplz/jev_antispam_bot (Content moderation, pinned 0b07e88): group admins skipped, plus 3 more skip paths",
      "Jevmail (Email and lead, pinned f6f20af): /preview simulator (no Jev call; no mailbox action)"
     ],
     "fallback": false
    }
   ],
   "unsure_label": "not sure / not checked",
   "unsure_text": "Not sure? Question 6 in the checklist below shows what to look for."
  }
 ],
 "reminders": [
  {
   "number": 2,
   "text": "What is your timeout, and what happens when it fires?",
   "note": "Timeouts were not tallied across all 80."
  },
  {
   "number": 8,
   "text": "Is the failure written down, and does a failed log write block the action?",
   "note": "Not counted across the 80: the domain tables have no logging column."
  },
  {
   "number": 9,
   "text": "Does your code log or show when it falls back or fails open?",
   "note": "Not counted across the 80: the map does not record whether a fallback is visible."
  }
 ],
 "copy": {
  "intro": "Pick what your own code does in each of five failure conditions. For each choice you see how many of the 80 implementations on this page made the same choice, with examples.",
  "disclaimer": "Compares your choices with 80 Jev implementations read in source at pinned commits (map recomputed 19 Oct 2026). It does not read or test your code, and nothing leaves your browser.",
  "template": "{n} of 80 made the same choice",
  "scope": "These counts describe these 80 at their pinned commits; they are not a rate for Jev integrations in general. The same counts are in the checklist below and in the \"All 80 rows\" table.",
  "reminders_title": "Three more questions to ask (not counted across the 80)",
  "fallback": "You chose a fallback: question 7 asks whether it is cheaper or riskier than failing.",
  "unsure": "Not sure? Question {q} in the checklist below shows what to look for."
 }
}
