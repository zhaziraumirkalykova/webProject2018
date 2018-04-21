# Generated by Django 2.0.4 on 2018-04-20 18:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_material_student_teacher'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(blank=True, max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('course', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.Course')),
            ],
        ),
        migrations.RemoveField(
            model_name='material',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='material',
            name='updated_at',
        ),
    ]
