#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
STAMP="$(date +%Y%m%d-%H%M%S)"
OUT_DIR="${1:-${ROOT_DIR}/dist/student-exports/${STAMP}}"

DAY1_DIR="${OUT_DIR}/day-01"
DAY2_DIR="${OUT_DIR}/day-02"

copy_file() {
  local src="$1"
  local dest="$2"
  mkdir -p "$(dirname "$dest")"
  cp "$src" "$dest"
}

copy_dir() {
  local src="$1"
  local dest="$2"
  mkdir -p "$(dirname "$dest")"
  cp -R "$src" "$dest"
}

echo "Creating student exports in: ${OUT_DIR}"
rm -rf "${DAY1_DIR}" "${DAY2_DIR}"
mkdir -p "${DAY1_DIR}" "${DAY2_DIR}"

# Shared docs
copy_file "${ROOT_DIR}/LICENSE" "${DAY1_DIR}/LICENSE"
copy_file "${ROOT_DIR}/LICENSE" "${DAY2_DIR}/LICENSE"

# Day 1 export (Class 1 only, no solutions)
copy_file "${ROOT_DIR}/curriculum/class-01/cheatsheet.md" "${DAY1_DIR}/curriculum/class-01/cheatsheet.md"
copy_file "${ROOT_DIR}/curriculum/class-01/exercises.md" "${DAY1_DIR}/curriculum/class-01/exercises.md"

cat > "${DAY1_DIR}/README.md" << 'EOF'
# Student Pack - Day 1

## Included

- `curriculum/class-01/cheatsheet.md`
- `curriculum/class-01/exercises.md`

## Notes

- Solutions are intentionally excluded.
- Use this pack for Day 1 in-class work and homework.
EOF

# Day 2 export (Class 2 + mini project starter, no solutions)
copy_file "${ROOT_DIR}/curriculum/class-02/cheatsheet.md" "${DAY2_DIR}/curriculum/class-02/cheatsheet.md"
copy_file "${ROOT_DIR}/curriculum/class-02/exercises.md" "${DAY2_DIR}/curriculum/class-02/exercises.md"
copy_file "${ROOT_DIR}/curriculum/references/combined-cheatsheet.md" "${DAY2_DIR}/curriculum/references/combined-cheatsheet.md"
copy_file "${ROOT_DIR}/projects/user-directory/requirements.md" "${DAY2_DIR}/projects/user-directory/requirements.md"
copy_dir "${ROOT_DIR}/projects/user-directory/starter" "${DAY2_DIR}/projects/user-directory/starter"

cat > "${DAY2_DIR}/README.md" << 'EOF'
# Student Pack - Day 2

## Included

- `curriculum/class-02/cheatsheet.md`
- `curriculum/class-02/exercises.md`
- `curriculum/references/combined-cheatsheet.md`
- `projects/user-directory/requirements.md`
- `projects/user-directory/starter/`

## Notes

- Solutions are intentionally excluded.
- Use this pack for Day 2 classwork and mini-project implementation.
EOF

echo "Done."
echo "Day 1: ${DAY1_DIR}"
echo "Day 2: ${DAY2_DIR}"

if command -v zip >/dev/null 2>&1; then
  (
    cd "${OUT_DIR}"
    zip -rq "day-01.zip" "day-01"
    zip -rq "day-02.zip" "day-02"
  )
  echo "Zip files:"
  echo "${OUT_DIR}/day-01.zip"
  echo "${OUT_DIR}/day-02.zip"
else
  echo "zip command not found; skipped .zip archive creation."
fi
