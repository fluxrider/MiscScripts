if [ -f /etc/bashrc ]; then
  . /etc/bashrc
fi

export PS1="\D{%F %T} \w>"
