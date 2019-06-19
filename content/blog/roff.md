---
title: Coding on the Shoulders of Giants Whose Output Devices are Physical Printers
date: "2019-05-21"
---

I was attempting to grep the ascii man page for the phrase "hexadecimal set",
which is on the 27th line. Running `man ascii | grep 'hexadecimal set' returns
no results, even though we can see it _right there_!. Next, we notice that
`hexadecimal is in boldface, which is perhaps causing the issue.

We run `man ascii | tail -n+27 | head -n1` to get the line we want, then pipe
that to xxd to see the file's hexadecimal representation. `man ascii | tail -n+27 | head -n1 | xxd`

Here we start to see the problem. 'hexadecimal set` is not `hexadecimal set` but
`h.he.ex.xa.ad.de.ec.ci.im.ma.al.l set` (!?). So, what's going on here?

Looking further, the periods rendered by xxd are non-printing characters with
the hex code 08. Referencing our table, this corresponds to backspace (?!?).

To quote Ellen Ullman:
"We build our computers the way we build our cities -- over time, without a
plan, on top on ruins."

The ruins in this case are physical printers as output devices. A technique to
write boldface text with a physical printer -- called overstriking -- is to
print the character, move the carriage back one space, and reprint the same
character on top.

The -U option in`less` will show ^H rather than the overstruck character. Why
does `less` support this? Because document formatters around when less was
written supported this convention.

Document formatters support this convention because they were written when the
standard output devices of their users were physical printers. And those
document formatters are still being used today -- notably in our case, groff for
man pages.

groff is a document formatter for GNU-Linux based on an earlier implementation
for Unix called nroff*, which in turn was based on a formatter for Multics called
roff, which was an abbreviated name for its antecedent, RUNOFF, which was
published in 1964 for the MIT system CTSS. Over time, without a plan, on top of
ruins.

For fun (?) I wrote a fake man page in groff describing the Recurse Center,
where I'm currently taking sabbatical.

`rc.1`

* Ken Thompson tells a story in this interview with Brian Kernighan
  (https://youtu.be/EY6q5dv_B-o?t=1654)
