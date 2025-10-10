#!/usr/bin/env python3
import json
import os
import sys

def main():
    readme_filename = "README.md"
    start_marker = "<!-- CONTRIBUTORS START -->"
    end_marker = "<!-- CONTRIBUTORS END -->"

    # Get PR_AUTHOR from environment variables
    pr_author = os.getenv("PR_AUTHOR")

    try:
        # Read the list of contributors obtained from the API
        with open("contributors.json", "r", encoding="utf-8") as f:
            contributors = json.load(f)

        # Read the current content of readme.md
        if os.path.exists(readme_filename):
            with open(readme_filename, "r", encoding="utf-8") as f:
                content = f.read()
        else:
            content = ""

        # (Optional) Check if the PR author is already in readme.md
        if pr_author and f'">{pr_author}</a>' in content:
            print(f"User {pr_author} is already in README.md. No changes made.")
            sys.exit(0)

        # Build the HTML table for contributors
        html_lines = [
            "<h2>Contributors</h2>",
            "<table border='1' cellspacing='0' cellpadding='5'>",
            "  <thead>",
            "    <tr><th>Avatar</th><th>Username</th><th>Insights</th></tr>",
            "  </thead>",
            "  <tbody>"
        ]

        repo_name = os.getenv("GITHUB_REPOSITORY")

        bots_to_exclude = {"actions-user", "github-actions[bot]", "GitHub Action"}

        for contributor in contributors:

            if contributor["login"] in bots_to_exclude:
                continue

            row = (
                f"    <tr>"
                f"<td><img src=\"{contributor['avatar_url']}?s=50\" alt=\"Avatar\" width=\"50\" height=\"50\"></td>"
                f"<td><a href=\"{contributor['html_url']}\">{contributor['login']}</a></td>"
                f"<td><a href=\"https://github.com/{repo_name}/graphs/contributors\">📈</a></td>"
                f"</tr>"
            )
            html_lines.append(row)

        html_lines.append("  </tbody>")
        html_lines.append("</table>")
        new_section = "\n".join(html_lines)

        # If the contributors section already exists, compare it with the new section
        if start_marker in content and end_marker in content:
            before, current_section_with_markers = content.split(start_marker, 1)
            current_section, after = current_section_with_markers.split(end_marker, 1)
            if new_section.strip() == current_section.strip():
                print("No changes detected in the contributors list. README.md will not be updated.")
                sys.exit(0)
            updated_content = f"{before}{start_marker}\n{new_section}\n{end_marker}{after}"
        else:
            updated_content = f"{content.rstrip()}\n\n{start_marker}\n{new_section}\n{end_marker}\n"

        # Write the updated content to readme.md
        with open(readme_filename, "w", encoding="utf-8") as f:
            f.write(updated_content)

        print("README.md successfully updated with the contributors list.")

    except json.JSONDecodeError as e:
        print(f"Error parsing contributors.json: {e}", file=sys.stderr)
        sys.exit(1)
    except FileNotFoundError as e:
        print(f"File not found: {e}", file=sys.stderr)
        sys.exit(1)
    except OSError as e:
        print(f"I/O error: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error updating README.md: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
