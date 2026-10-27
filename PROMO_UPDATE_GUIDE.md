# GSEA Course Admin — Semester & Promotion Update Guide

This guide explains how to set up a new promotion at the start of the semester—or make mid-semester changes to teachers, rooms, dates, or student lists—by editing **one single local file** (`PROMO_SETUP.private.md`).

> **Privacy Guarantee (GDPR / RGPD)**:
> - `PROMO_SETUP.private.md` stays **100% on your computer** (listed in `.gitignore`) and is never uploaded to GitHub.
> - **GitHub / Cloud mirror** automatically uses anonymous codes (`GRPA001`, `Teacher A (TBC)`).
> - **Moodle SCORM (`GSEA_Semester_3_SCORM_MOODLE.zip`), Windows `.iso`, and Mac `.dmg`** automatically receive the real student and teacher names.

---

## Quick 3-Step Workflow

1. **Open** `PROMO_SETUP.private.md` in your editor.
2. **Edit** the details you want to change (Promotion name, Teachers, Class times, Weekly Dates/Rooms, or Student names) and **Save** (`Cmd + S`).
3. **Run the Update**:
   - **With the AI Assistant**: Type **`Semester 3 Update`** in the chat.
   - **Or Manually in Terminal**: Run `npm run promo:update`.

---

## Field-by-Field Instructions

### 1. Promotion & Group Sizes
At the top of `PROMO_SETUP.private.md`, enter the promotion name, academic year, and how many students are in each group (supports **1 to 4 groups: A, B, C, D**):

```text
PROMOTION: GSEA 25A
SEMESTER: 3
ACADEMIC_YEAR: 2026-2027
TOTAL_STUDENTS: 30
NUMBER_OF_GROUPS: 3

GROUP_A_COUNT: 10
GROUP_B_COUNT: 10
GROUP_C_COUNT: 10
GROUP_D_COUNT: 0
```
*Note: The system automatically calculates the exact combination of Pairs and Trios for Formative Evaluations based on each group's size (e.g., 10 students = 2 Pairs + 2 Trios; 9 students = 3 Pairs + 1 Trio).*

---

### 2. Teachers & Weekly Class Slots
Under `[TRACK: AT]`, enter the teacher name and the 2-hour weekly class slot for each group:

```text
GROUP_A_TEACHER: Phil PARRIS
GROUP_A_SLOT: Wednesday 13h15 - 15h15

GROUP_B_TEACHER: Jane SMITH
GROUP_B_SLOT: Thursday 08h00 - 10h00
```
- **If a teacher is not yet confirmed**: Leave it as `Teacher A (TBC)`.
- **Automatic 30-Minute FE Slots**: The system reads the start time of each group's 2-hour slot (e.g., `13h15 - 15h15` or `08h00 - 10h00`) and automatically divides it into **four 30-minute oral evaluation slots** for that group (`13h15–13h45`, `13h45–14h15`, `14h15–14h45`, `14h45–15h15`).

---

### 3. Weekly Calendar Dates & Room Numbers per Group
Under `[AT WEEKLY SCHEDULE & ROOMS]`, each line represents one week of the 15-week semester (`7 weeks` for Module 1 + `8 weeks` for Module 2), separated by `|`:

```text
# Week# | CalWeek | Date       | Deck Card | Grp A Room | Grp B Room | Grp C Room | Grp D Room
W01     | W37     | Wed 09 Sep | M1.S1     | B204       | B206       | B208       | -
W02     | W38     | Wed 16 Sep | M1.S2     | TBC        | TBC        | TBC        | -
```

- **Automatic Session Titles (`Deck Card`)**:
  - `M1.S1`–`M1.S6` and `M2.S1`–`M2.S7` automatically pull their live Session Titles directly from the main course deck (`src/js/02-config.js`). Whenever you rename a session on the deck, the Admin calendar updates automatically.
  - `M1.FE1` and `M2.FE2` mark the Formative Evaluation weeks.
- **Adding or Changing Room Numbers**:
  - When a room is not yet known, leave it as `TBC` or `-`. Nothing extra will clutter the calendar page.
  - As soon as you replace `TBC` with a real room number (e.g. `B204` or `112`), a room badge (`Grp A: B204`) will automatically appear on that week in the **Weekly Course Calendar** (and in the **FE Tutorial Rotas** header if it is an `FE1` or `FE2` week).
- **Adding or Moving a Holiday Break**:
  - Place a line starting with `HOLIDAY |` between the appropriate weeks:
    ```text
    HOLIDAY | 🎄 Weeks 51 & 52 — Christmas & Winter Vacation (No Classes)
    ```

---

### 4. Student Names per Group
At the bottom of the file, list the students in each group (`1.` to `10.`) in `LASTNAME Firstname` format:

```text
[GROUP A STUDENTS]
1. MARTIN Lucas
2. BERNARD Emma
...
```
- The system automatically assigns each student their permanent anonymous code (`GRPA001` to `GRPA010`, `GRPB001` to `GRPB010`, `GRPC001` to `GRPC010`) and builds rotating **FE1** and **FE2** tutorial schedules so students work with different partners and rotate between early and late slots.

---

## Making Mid-Semester Changes

If anything changes during the semester:
- **New room bookings published for next week?** Type the room numbers into the table for that week, save, and run **`Semester 3 Update`**.
- **Teacher or time slot changed for Group B?** Edit `GROUP_B_TEACHER` or `GROUP_B_SLOT`, save, and run **`Semester 3 Update`**.
- **Student changed groups?** Update the student lists and group counts (`GROUP_A_COUNT`, `GROUP_B_COUNT`), save, and run **`Semester 3 Update`**.

