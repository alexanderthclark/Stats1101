import os
import subprocess

files = os.listdir()
files = [f for f in files if f.endswith('.pdf')]
for f in files:
	subprocess.run(['pdf2svg', f, f.replace('.pdf', '.svg')])