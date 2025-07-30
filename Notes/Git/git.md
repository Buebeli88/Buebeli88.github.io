Git is a software that allows you to keep track of changes made to a project over time. Git works by recording the changes you make to a project, storing those changes, then allowing you to reference them as needed.

git init is to initanilze (init) to start tracking changes

Typ "git init" as command.

Bsp

$git init
Initialized empty Git repository in /home/ccuser/workspace/sorcereres-code/.git/

DONE

----------------------------------------

Git Workflow


Nice! We have a Git project. A Git project can be thought of as having three parts:
    1. A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files
    2. A Staging Area: where you’ll list changes you make to the working directory
    3. A Repository: where Git permanently stores those changes as different versions of the project
The Git workflow consists of editing files in the working directory, adding files to the staging area, and saving changes to a Git repository. In Git, we save changes with a commit, which we will learn more about in this lesson.


Sprich von git init weiter zu Working Directory mit git add zur "Staging Area und mit git commit zu Repository

DONE

--------------------------------------------

Befehl "git status"

As you write the screenplay, you will be changing the contents of the working directory. You can check the status of those changes with:

$ git status

Files in red means they are untracked files. This means Git sees them but has not started tracking them.

When the file is portraied in green this means it was added to the staging area

DONE

-------------------------------------

Befehl "git add"

To start tracking a file you use git add folowed by the filename.

Bsp

git add scene-1.txt

DONE

-----------------------------------------

Befehl "git diff"

We can check the difference between the working directory and the staging area with:

Git diff filename

DONE

------------------------------------

Befehl "git commit"

A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository.
git commit is the command we’ll do next. However, one more bit of code is needed for a commit: the option -m followed by a message. Here’s an example:

$ git commit -m "Complete first line of dialogue"

Standard Conventions for Commit Messages:
    • Must be in quotation marks
    • Written in the present tense
    • Should be brief (50 characters or less) when using -m

DONE
------------------------------

Befehl "git log"
Often with Git, you’ll need to refer back to an earlier version of a project. Commits are stored chronologically in the repository and can be viewed with:


$ git log


In the output, notice:
    • A 40-character code, called a SHA, that uniquely identifies the commit. This appears in orange text.
    • The commit author (you!)
    • The date and time of the commit
    • The commit message

DONE

--------------------



Generalization

You have now been introduced to the fundamental Git workflow. You learned a lot! Let’s take a moment to generalize:
    • Git is the industry-standard 
version control
Preview: Docs Loading link description
 system for web developers
    • Use Git commands to help keep track of changes made to a project:
        ○ git init creates a new Git repository
        ○ git status inspects the contents of the working directory and staging area
        ○ git add adds files from the working directory to the staging area
        ○ git diff shows the difference between the working directory and the staging area
        ○ git commit permanently stores file changes from the staging area in the repository
        ○ git log shows a list of all previous commits



File erstelle und hochladen mit Git und GitHub

Im normalfall mit "git init" anfangen (im ordner)

Gefolgt von "git add filename"
Zum test kann man "git status" eingeben
Weiter mit "git commit -m "beschreibung der anpassung/erstellung"
Evtl test mit "git status"
Am ende "git push" um die anpassung/erstellung auf github zu laden


Mit "git add ." könne man ALLE änderungen im aktuellen Ordner bearbeiten

Mit "git add -A" können ALLE änderungen vom ganzen repository ausgewählt werden.



Nächster versuch mit einem Ordner

VORERST DONE
