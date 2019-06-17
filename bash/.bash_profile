if [ -f ~/.bashrc ]; then
  . ~/.bashrc
fi

export VISUAL=~/bin/vim
export EDITOR="$VISUAL"

export PATH=$HOME/bin:$HOME/_/apps/texlive/2019/bin/x86_64-linux:$PATH
export C_INCLUDE_PATH=$HOME/include
export CPLUS_INCLUDE_PATH=$HOME/include
export LIBRARY_PATH=$HOME/lib64:$HOME/lib
export LD_LIBRARY_PATH=$HOME/lib64:$HOME/lib
export PKG_CONFIG_PATH=$HOME/lib64/pkgconfig:$HOME/lib/pkgconfig
export XDG_DATA_DIRS=$HOME/share:$XDG_DATA_DIRS
