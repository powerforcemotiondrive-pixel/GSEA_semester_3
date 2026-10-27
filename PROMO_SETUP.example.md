# ==========================================================================
# ENAC GSEA — SEMESTER 3 PROMOTION & ADMIN SETUP FORM (TEMPLATE)
# ==========================================================================
# INSTRUCTIONS:
# 1. Edit the values in `PROMO_SETUP.private.md` (which stays 100% local
#    on your Mac and is never uploaded to GitHub).
# 2. Save the file (`Cmd + S`) and type in chat:  Semester 3 Update
#    (or run `npm run promo:update` in the terminal).
# 3. Session titles are pulled automatically from the main course deck
#    (`src/js/02-config.js`). This update ONLY touches Admin & Roster pages.
# ==========================================================================

PROMOTION: GSEA 25A
SEMESTER: 3
ACADEMIC_YEAR: 2026-2027
TOTAL_STUDENTS: 30
NUMBER_OF_GROUPS: 3

# --------------------------------------------------------------------------
# 1. GROUP SIZES (Supports 1 to 4 Groups: A, B, C, D)
# --------------------------------------------------------------------------
GROUP_A_COUNT: 10
GROUP_B_COUNT: 10
GROUP_C_COUNT: 10
GROUP_D_COUNT: 0

# --------------------------------------------------------------------------
# 2. TRACK CONFIGURATION: TECHNICAL ENGLISH (AT • LV125E) — 15 WEEKS
#    - Enter real teacher names below (GitHub remains anonymized as Teacher A/B/C;
#      real teacher names are injected into Moodle SCORM, ISO, and DMG).
#    - Enter each group's 2-hour weekly class slot (used to auto-calculate
#      the 4 x 30-min Formative Evaluation slots).
# --------------------------------------------------------------------------
[TRACK: AT]
COURSE_CODE: LV125E
COURSE_NAME: Technical English (AT)
TOTAL_WEEKS: 15
SCHEDULE_SUMMARY: Wednesdays 13h15 – 15h15

GROUP_A_TEACHER: Teacher A (TBC)
GROUP_A_SLOT: Wednesday 13h15 - 15h15

GROUP_B_TEACHER: Teacher B (TBC)
GROUP_B_SLOT: Wednesday 13h15 - 15h15

GROUP_C_TEACHER: Teacher C (TBC)
GROUP_C_SLOT: Wednesday 13h15 - 15h15

GROUP_D_TEACHER: 
GROUP_D_SLOT: 

# --------------------------------------------------------------------------
# 3. WEEKLY CLASS CALENDAR & ROOM ALLOCATIONS PER GROUP (15 Weeks)
# --------------------------------------------------------------------------
# Format:
# Week# | CalWeek | Date       | Deck Card | Grp A Room | Grp B Room | Grp C Room | Grp D Room
#
# Notes:
# - Deck Card (e.g. M1.S1, M1.FE1, M2.S1, M2.FE2) automatically pulls the
#   live Session Title from the course deck (`src/js/02-config.js`)!
# - For room numbers: leave as "TBC" or "-" until rooms are known. Once you
#   type a real room (e.g., B204), a room badge appears automatically in
#   the Weekly Course Calendar and FE Tutorial Rotas.
# - To insert a holiday break between weeks, add a line starting with:
#   HOLIDAY | Weeks 51 & 52 — Christmas & Winter Vacation (No Classes)
# --------------------------------------------------------------------------
[AT WEEKLY SCHEDULE & ROOMS]
W01 | W37 | Wed 09 Sep | M1.S1  | TBC | TBC | TBC | -
W02 | W38 | Wed 16 Sep | M1.S2  | TBC | TBC | TBC | -
W03 | W39 | Wed 23 Sep | M1.S3  | TBC | TBC | TBC | -
W04 | W40 | Wed 30 Sep | M1.S4  | TBC | TBC | TBC | -
W05 | W41 | Wed 07 Oct | M1.S5  | TBC | TBC | TBC | -
W06 | W42 | Wed 14 Oct | M1.S6  | TBC | TBC | TBC | -
W07 | W43 | Wed 21 Oct | M1.FE1 | TBC | TBC | TBC | -
HOLIDAY | 🍂 Week 44 — Autumn Academic Break (No Classes)
W08 | W45 | Wed 04 Nov | M2.S1  | TBC | TBC | TBC | -
W09 | W46 | Wed 11 Nov | M2.S2  | TBC | TBC | TBC | -
W10 | W47 | Wed 18 Nov | M2.S3  | TBC | TBC | TBC | -
W11 | W48 | Wed 25 Nov | M2.S4  | TBC | TBC | TBC | -
W12 | W49 | Wed 02 Dec | M2.S5  | TBC | TBC | TBC | -
W13 | W50 | Wed 09 Dec | M2.S6  | TBC | TBC | TBC | -
HOLIDAY | 🎄 Weeks 51 & 52 — Christmas & Winter Vacation (No Classes)
W14 | W01 | Wed 06 Jan | M2.S7  | TBC | TBC | TBC | -
W15 | W02 | Wed 13 Jan | M2.FE2 | TBC | TBC | TBC | -

# --------------------------------------------------------------------------
# 4. STUDENT NAMES PER GROUP (Format: LASTNAME Firstname)
#    - GitHub always keeps anonymous IDs (GRPA001..GRPA010, etc.)
#    - Real names entered below are automatically saved to `students.private.json`
#      and injected into Moodle SCORM, ISO, and Mac DMG packages.
# --------------------------------------------------------------------------

[GROUP A STUDENTS]
1. LASTNAME Firstname
2. LASTNAME Firstname
3. LASTNAME Firstname
4. LASTNAME Firstname
5. LASTNAME Firstname
6. LASTNAME Firstname
7. LASTNAME Firstname
8. LASTNAME Firstname
9. LASTNAME Firstname
10. LASTNAME Firstname

[GROUP B STUDENTS]
1. LASTNAME Firstname
2. LASTNAME Firstname
3. LASTNAME Firstname
4. LASTNAME Firstname
5. LASTNAME Firstname
6. LASTNAME Firstname
7. LASTNAME Firstname
8. LASTNAME Firstname
9. LASTNAME Firstname
10. LASTNAME Firstname

[GROUP C STUDENTS]
1. LASTNAME Firstname
2. LASTNAME Firstname
3. LASTNAME Firstname
4. LASTNAME Firstname
5. LASTNAME Firstname
6. LASTNAME Firstname
7. LASTNAME Firstname
8. LASTNAME Firstname
9. LASTNAME Firstname
10. LASTNAME Firstname

[GROUP D STUDENTS]
# Leave empty when NUMBER_OF_GROUPS is 3
