#!/bin/bash

# Check if a version type is provided
if [ -z "$1" ]; then
  echo "Please provide a version type (patch, minor, or major)"
  exit 1
fi

# Update CHANGELOG.md
vim CHANGELOG.md

# Use yarn version to update package.json and get the new version number
NEW_VERSION=$(yarn version --$1 --no-git-tag-version | sed 's/New version: //')

# Extract the changelog for the new version
CHANGELOG=$(awk "/## \[$NEW_VERSION\]/{flag=1; next} /## \[/{flag=0} flag" CHANGELOG.md)

# Commit changes
git add CHANGELOG.md package.json
git commit -m "Bump version to $NEW_VERSION

$CHANGELOG"

# Create an annotated tag with the changelog
git tag -a v$NEW_VERSION -m "Version $NEW_VERSION

$CHANGELOG"

# Push changes and tags
git push && git push --tags