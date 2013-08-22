from pyramid.httpexceptions import HTTPFound
from pyramid.renderers import get_renderer
from pyramid.response import Response
from pyramid.view import view_config
from pyramid.httpexceptions import HTTPForbidden
from pyramid.security import remember
from pyramid.security import forget
from pyramid.security import has_permission
from sqlalchemy import *
from sipkd.models import *
from sipkd.models.model import *
from sqlalchemy.exc import DBAPIError
import json
import types
from sipkd.models.apps import osApps
from data.spops import osSpop

class PbbdViews(object):
    def __init__(self, context, request):
        self.context = context
        self.request = request
        
        renderer = get_renderer("../../templates/layout.pt")
        self.layout = renderer.implementation().macros['layout']
        
        renderer = get_renderer("../../templates/main.pt")
        self.main = renderer.implementation().macros['main']

        renderer = get_renderer("../../templates/pbbd/nav.pt")
        self.nav = renderer.implementation().macros['nav']
        
    @view_config(route_name='pbbd',
                 renderer='../../templates/pbbd/home.pt')
    def pbbd(self):
        from sipkd.models.apps import osApps
        session = self.request.session
        request = self.request
        resource = None

        if session['logged']<>1:
           return HTTPFound(location='/logout') 
        url=request.resource_url(resource)

        if self.request.session['sa']==1:
            opts = osApps.get_rows()
        else:
            pass
  
        return dict(title="OpenSIPKD",
                    message="",
                    usernm=self.request.session['usernm'], 
                    opts=opts,
                    url=url)
   
    @view_config(route_name='pbbdlspop',
                 renderer='../../templates/pbbd/lspop.pt')
    def pbbdlspop(self):
 
  
        return dict(title="OpenSIPKD",
                    message="",
                    usernm=self.request.session['usernm'], 
                    opts=opts,
                    url=url)
