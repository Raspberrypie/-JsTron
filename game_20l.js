function d(){p.s=3+k/20;var _=Math.floor(10*Math.random()+1);c.fillStyle="#C" +
"CFFCC",c.fillRect(0,0,600,600),c.fillStyle="blue",c.fillRect(p.x,p.y,30,30
),c.fillStyle="red",c.fillRect(e.x,e.y,30,30),c.fillStyle="green",c.font="1" +
"00px sans",c.fillText(k,250,350),c.beginPath(),c.fillStyle="blue",c.arc((p
)._x,p._y,p.r,0,6.28,!1),c.fill(),c.beginPath(),c.fillStyle="red",c.arc(e._x,(e
)._y,e.r,0,6.28,!1),c.fill(),p._y+=-1*p.s,e._y+=k,p._y>600&&(p._x=p._y=-40
),p._y<0&&(p._x=p._y=-40),e._y>600&&(e._x=e._y=-40),e._y<0&&(e._x=e._y=-40
),p._x>e.x&&p._x<e.x+30&&p._y<=e.y+30&&ch&&(k++,ch=!1,p._y=p._x=-40),-40==
p._y&&(ch=!0),e.x+=k*m,(e.x<=0||e.x>=570)&&(m*=-1),-40==e._y&&k%_==0&&((e
)._y=20,e._x=e.x+15),e._x>=p.x&&e._x<p.x+30&&e._y>=p.y&&(k=0,e._y=e._x=-40)
}function k_(e){var c=e.keyCode;32==c&&-40==p._y&&(p._x=p.x+15,p._y=p.y-3),68==
c&&p.x<570&&(p.x+=p.s),65==c&&p.x>0&&(p.x-=p.s)}c=document.createElement
("canvas"),document.addEventListener("keydown",k_,!1),c.id="c",c.width=600,(c
).height=600,document.body.appendChild(c),c=document.getElementById("c"
).getContext("2d"),k=0,ch=!0,m=1,p={x:270,y:570,_x:-40,_y:-40,r:7,s:3},e=
{x:270,y:0,_x:-40,_y:-40,r:7,d:0},setInterval(d,1e3/60);
