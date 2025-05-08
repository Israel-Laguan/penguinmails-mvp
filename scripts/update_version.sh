#!/bin/bash
set -euo pipefail

VERSION_FILE="version.txt"

validate_semver() {
  local version="$1"
  if [[ ! "$version" =~ ^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$ ]]; then
    echo "❌ Error: Invalid version '$version'. It must follow SemVer (X.Y.Z where X, Y, Z are numbers >= 0 without leading zeros)"
    exit 1
  fi
}

if [ $# -eq 0 ]; then
  echo "❌ Error: You must provide a version as an argument"
  echo "Example: ./update_version.sh 1.2.3"
  exit 1
fi

new_version="$1"
validate_semver "$new_version"

touch "$VERSION_FILE"

printf "%s" "$new_version" > "$VERSION_FILE"

echo "✅ Version successfully updated to: $new_version"
echo "   Modified file: $(pwd)/$VERSION_FILE"