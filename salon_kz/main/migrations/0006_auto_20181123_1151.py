# Generated by Django 2.1.2 on 2018-11-23 11:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20181121_1615'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='comment',
            name='client',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='master',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='partner',
        ),
        migrations.AddField(
            model_name='comment',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='comment_owners', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='ClientRating',
            fields=[
                ('rating_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.Rating')),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client_ratings', to='main.Client')),
            ],
            bases=('main.rating',),
        ),
        migrations.CreateModel(
            name='MasterRating',
            fields=[
                ('rating_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.Rating')),
                ('master', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='master_ratings', to='main.Master')),
            ],
            bases=('main.rating',),
        ),
        migrations.CreateModel(
            name='SalonRating',
            fields=[
                ('rating_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.Rating')),
                ('salon', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salon_ratings', to='main.Salon')),
            ],
            bases=('main.rating',),
        ),
        migrations.AddField(
            model_name='rating',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rating_owners', to=settings.AUTH_USER_MODEL),
        ),
    ]
