#!/bin/bash
set -e

VERSION_FILE="version.txt"

# Validación de versión SemVer
validate_semver() {
  if [[ ! "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Error: Versión no válida - debe seguir SemVer (X.Y.Z)"
    exit 1
  fi
}

validate_semver "$1"
echo "$1" > "$VERSION_FILE"
echo "Versión actualizada a: $1"