from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import authentication
from rest_framework import status
from main.models import CustomUser, Client, Master, Partner, Salon
from main.serializers import CustomUserSerializer
from main.constants import CLIENT, MASTER, PARTNER, USER_TYPES
from django.contrib.auth.hashers import make_password

@api_view(['POST'])
def login(request):
    serializer = AuthTokenSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    token, _ = Token.objects.get_or_create(user=user)
    context = {
        'key': token.key,
    }
    
    if user.user_type == CLIENT:
        context['client_id'] = user.client.pk
    elif user.user_type == MASTER:
        context['master_id'] = user.master.pk
    elif user.user_type == PARTNER:
        context['partner_id'] = user.partner.pk

    return Response(context)

@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def logout(request):
    request.user.auth_token.delete()
    return Response({'detail': 'Succesfully loged out'})

@api_view(['POST'])
def register(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(serializer.data['password'])
        user.save()
        token, _ = Token.objects.get_or_create(user=user)
        context = {
            'key': token.key,
        }
        if user.user_type == CLIENT:
            client = Client(user=user)
            client.save()
            context['client_id'] = user.client.pk
        elif user.user_type == MASTER:
            salon_id = int(request.data.get('salon_id'))
            salon = Salon.objects.get(pk=salon_id)
            master = Master(user=user, salon = salon)
            # user.save()
            master.save()
            context['master_id'] = user.master.pk
        elif user.user_type == PARTNER:
            partner = Partner(user=user)
            partner.save()
            context['partner_id'] = user.partner.pk

        if user:
            user.save()
            return Response(context)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
