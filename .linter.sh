#!/bin/bash
cd /home/kavia/workspace/code-generation/reactswaggerexplorer-5544-5549/reactswaggerexplorer
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

