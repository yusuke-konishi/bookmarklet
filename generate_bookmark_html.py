#!/usr/bin/env python3
#
# Usage:
#   ./generate_bookmark_html.py <js_path>

import sys
import os

# exit if no argument
if len(sys.argv) < 2:
    print('Usage: ./generate_bookmark_html.py <js_path>')
    sys.exit()

js_path = sys.argv[1]
js_dir = os.path.dirname(js_path)
js_file = os.path.basename(js_path)

bookmark_name = js_file[:-3]
html_file = 'bookmark_{}.html'.format(bookmark_name)
html_path = os.path.join(js_dir, html_file)

# convert JavaScript code into one-line string
js_str = ''

with open(js_path) as js_obj:
    for line in js_obj:
        js_str += line[:-1]

# generate html file with JavaScript string and bookmark name
html_str = """<!DOCTYPE NETSCAPE-Bookmark-file-1>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
    <DT><A HREF="{}">{}</A>
</DL><p>
""".format(js_str, bookmark_name)

with open(html_path, 'w') as html_obj:
    html_obj.write(html_str)

print('js_path: {}'.format(js_path))
print('js_dir: {}'.format(js_dir))
print('js_file: {}'.format(js_file))
print('bookmark_name: {}'.format(bookmark_name))
print('html_file: {}'.format(html_file))
print('html_path: {}'.format(html_path))
