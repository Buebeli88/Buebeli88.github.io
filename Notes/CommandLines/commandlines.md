Filesystem Structure
A computer’s filesystem organizes the data stored by a computer, so that it can be easily retrieved by the user.
Files are generally represented in a tree-like structure, in which any parent directory can have any number of children. The root directory is then found at the base of the tree.


The Command Line
The command line allows a user to navigate the filesystem and run built-in programs or custom scripts. In Unix, the command line interface is called Bash, and the shell prompt is the $.

Beispiel:

$


pwd Print Working Directory
The shell command pwd displays the file path from the root directory to the current working directory.

Beispiel:

$ pwd
/Users/sonny/Downloads


ls List
The shell command ls is used to list the contents of a directory. If no arguments are given, it will list the contents of the current working directory.

Beispiel:

$ ls
Desktop resume.pdf photo.png


cd Change Directory
The shell command cd is used to move throughout the filesystem of a computer. It accepts a variety of arguments:
    • Full file paths.
    • Names of children of the current directory.
    • .. the parent of the current directory.

Beispiel:

$ cd some-directory
$ cd ../some- directory


mkdir Make Directory
The shell command mkdir is used to make a new directory in the filesystem according to its argument. If a file path is given, the new directory will be placed at the end. Otherwise, it will create a new directory in the current working directory.

Beispiel:

$ mkdir new-directory
$ ls
old-directory new-directory


touch Create New File
The shell command touch creates a new file in the current working directory with the name provided.

Beispiel:

$ touch grocery-list.txt


Helper Commands
Helper commands for the command line include:
    • clear to clear the terminal
    • tab to autocomplete the line
    • ↑ and ↓ to cycle through previous commands


